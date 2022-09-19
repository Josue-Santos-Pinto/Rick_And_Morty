import React from "react";
import styled from "styled-components/native";

const Item = styled.View`
    width: 90%;
    min-height: 100px;
    border-radius: 10px;
    background-color: #FF00FF;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px auto;
    padding: 10px;
`
const ItemTitle = styled.Text`
    color: #FFF;
    font-size: 20px;
`
const ItemDate = styled.Text`
    color: #FFF;
    font-size: 15px;
`

export default ({data}:any) => {
    return (
        <Item>
            <>
                <ItemTitle>{data.name} - {data.episode} </ItemTitle>
                <ItemDate>{data.air_date}</ItemDate>
            </>
        </Item>
    )
}