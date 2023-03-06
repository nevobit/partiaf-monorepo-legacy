import { useQuery } from '@apollo/client';
import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { GET_MY_TICKETS } from '../../graphql/queries/goers';
import {useEffect} from 'react';
import Card from '../../components/Tickets/Card';
import colors from '../../components/Layout/Theme/colors';
import { useTheme } from '../../contexts/ThemeContext';

const logo = require("../../assets/favicon.png");

const Tickets = ({search, setOpenModalQr, setModal, setCoverSelected}: any) => {
  const { theme } = useTheme();
    
  const { user } = useSelector((state: any) => state.auth);
    
    const { data, loading, refetch } = useQuery(GET_MY_TICKETS, {
        variables: { uuid: user.uuid },
      });
      
      const filteredTickets = () => {
        const d = data?.getMyTikets?.filter((ticket: any) =>
        ticket.name.toLowerCase().includes(search.toLowerCase())).reverse();
        return d
    }
    
    useEffect(() => {
        refetch();
      }, []);
    
  return (
    <View style={{
        paddingHorizontal:10 ,
    }}>
         {loading ? <ActivityIndicator style={{
        marginTop: 50
      }} size={'large'} color={colors[theme].text} /> : (
        
      <FlatList 
        data={filteredTickets()}
        renderItem={({item}) => <Card logo={logo} setOpenModalQr={setOpenModalQr} item={item} theme={theme} setModal={setModal} setCoverSelected={setCoverSelected} />}
        keyExtractor={item=> item.uuid}
      />
      )}
        
    </View>
  )
}

export default Tickets
