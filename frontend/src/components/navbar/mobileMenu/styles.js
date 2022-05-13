import styled from "styled-components";

export const Container = styled.div`
  display: none;
  @media (max-width: 850px) {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
  }
`;

export const MenuIcon = styled.img`
  width: 50px;
  height: 100%;
  position: relative;
  top: 8px;
  cursor: pointer;
`;

export const Menu = styled.div`
  width: 250px;
  height: ${(props) => props.logged ? "600px" : "250px"};
  background: rgb(252, 91, 91);
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  top: 100%;
  border-top: 2px solid black;
  border-bottom-left-radius: 15px;
  @media(max-width: 250px) {
    width: 100%;
  }
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: break-word;
`;

export const UserPfp = styled.img`
  margin-top: 20px;
  width: 80px;
  height: 80px;
`;

export const Username = styled.h2`
  font-size: 25px;
  color: black;
  position: relative;
  bottom: 5px;
`;

export const FuncContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const StoreBtn = styled.button`
  width: 80%;
  height: 60px;
  background-image: linear-gradient(-90deg, rgb(84, 73, 187), rgb(147, 136, 243));
  font-size: 17px;
  font-weight: bold;
  border: 2px solid black;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const NotLoggedText = styled.h2`
  font-size: 25px;
  color: black;
`

export const NotLoggedBtns = styled.button`
  width: 80%;
  height: 60px;
  background-image: linear-gradient(-90deg, rgb(84, 73, 187), rgb(147, 136, 243));
  font-size: 17px;
  font-weight: bold;
  border: 2px solid black;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 10px;
`;
