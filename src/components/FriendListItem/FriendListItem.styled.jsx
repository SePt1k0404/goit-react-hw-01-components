import styled from 'styled-components';


const getOnline = props => {
    if (props.isOnline) {
        return 'green';
    }
    return 'red';
};

export const FriendsStatus = styled.span`
height: 10px;
width: 10px;
border-radius: 100%;
background-color: ${getOnline};
`;