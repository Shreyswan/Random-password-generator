import time
import streamlit as st
from random_strong_password_generator import get_random_words, generate_password

st.title("Random Strong Password Generator")
st.subheader("Welcome to the RSPG, your very own password bakery!!")

if 'type' not in st.session_state:
    st.session_state.type = None
if 'digits' not in st.session_state:
    st.session_state.digits = None
if 'words' not in st.session_state:
    st.session_state.words = None

st.markdown(
    """Time to bake some passwords!!
        Select you password type from the sidebar and your **baking time** (means how many words whould it have)
        Next press the Bake button to get baking 🧑‍🍳!!"""
)

def get_sidebar():
    with st.sidebar:
        st.session_state.type = st.sidebar.selectbox(
            "What's your password type??",
            ("alpha", "alphanum", "mix", "pin"),
            placeholder="Ready when you are..."
        )

        if st.session_state.type and st.session_state.type == "pin":
            st.session_state.digits = st.select_slider(
                "Select the size of pin:",
                options=[
                    2, 3, 4, 5, 6, 7, 8, 9, 10
                ],
            )

def get_password():
    with st.spinner("Baking your password, its in the oven... 🥐"):
        time.sleep(5)
        if st.session_state.digits:
            password = generate_password(st.session_state.words, st.session_state.type, st.session_state.digits)
        
        else:
            password = generate_password(st.session_state.words, st.session_state.type)
    
    st.success(f"Password is generated: {password}")
    st.write("Wanna copy it??")
    st.code(f"{password}", language="css")

get_sidebar()
st.session_state.words = get_random_words()

if st.button("Bake!"):
    if st.session_state.type:
        get_password()

    else:
        st.error("Select a proper type first!!")