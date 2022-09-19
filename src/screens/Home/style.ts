import styled from 'styled-components/native'

export default {
    Container: styled.View`
        flex: 1;
        background-color: #161247;
    `,
    HeaderImage: styled.Image`
        width: 100%;
        height: 200px;
        
    `,
    Text: styled.Text`
        color: #FFF;
        font-size: 25px;
        text-align: center;
    `,
    EpisodesList: styled.FlatList`
        flex: 1;
    `
}