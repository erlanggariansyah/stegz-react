import styled from "styled-components";

const SignedInNavbar = styled.div`
background-color: #161616;
padding: 2rem 10rem 2rem 10rem;
color: #fff;

nav {
	display: flex;
	flex-direction: column;
}

h1 {
	font-size: 3rem;
    margin-top: 0;
}

@media(min-width: 768px) {
	nav {
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		margin-bottom: 0;
        font-size: 2rem;
	}
}

@media(max-width: 768px) {
	nav {
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		margin-bottom: 0;
        font-size: 2rem;
	}
}

@media(min-width: 992px) {
    nav {
        flex-direction: row;
    }
}
`

export default SignedInNavbar;
