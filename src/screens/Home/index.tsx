import React, { useEffect, useState } from "react";
import C from './style'
import { ActivityIndicator, StatusBar } from "react-native";
import { api } from "../../services/api";
import ListItem from "../../components/ListItem";


export default () => {

    const [list, setList] = useState<Item[]>([])
    const [page,setPage] = useState(1)
    const [hasMoreData,setHasMoreData] = useState(true)

    const getEpisodes = async () => {
        if(!hasMoreData) return
        let result = await api.getEpisodes(page)
        const current = result.data.results
        setList(prev => [...prev, ...current])
       
        if(result.data.info?.next != null){
            setPage(prev => prev + 1)
        } else {
            setHasMoreData(false)
        }
    }
    const Loading = ({loading}:{loading:boolean}) => {
        if(loading){
           return <ActivityIndicator size='large' color='#FF00FF' />
        } else {
            return null
        }
    }
   

    useEffect(()=>{
        getEpisodes()
    },[])

    return (
        <C.Container>
            <StatusBar />
            <C.HeaderImage source={require('../../assets/header.png')} resizeMode='cover' />
            
            <C.EpisodesList 
                data={list}
                ListHeaderComponent={<C.Text>Rick and Morty Episodes</C.Text>}
                renderItem={({item}:any)=><ListItem data={item}/>}
                keyExtractor={(item:any)=>item.id}
                ListFooterComponent={<Loading loading={hasMoreData}/>}
                onEndReached={getEpisodes}
            />
        </C.Container>
    )
}