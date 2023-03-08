import { useQuery } from '@apollo/client';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { GET_MY_BOOKINGS } from '../../graphql/queries/bookings';
import {useEffect} from 'react';
import Card, { BookingCard } from '../../components/Tickets/Card';
import colors from '../../components/Layout/Theme/colors';
import { useTheme } from '../../contexts/ThemeContext';

const logo = require("../../assets/favicon.png");

const Bookings = ({search, setOpenModalQr, setModal, setCoverSelected}: any) => {
  const { theme } = useTheme();
  const { user } = useSelector((state: any) => state.auth);
 
  const {
    data: bookings,
    loading,
    refetch: refetchBookings,
  } = useQuery(GET_MY_BOOKINGS, {
    variables: { uuid: user.uuid },
  });

  const filteredBookings = () => {
    const tickets = bookings?.getMyBookings?.filter((ticket: any) =>
    ticket.name.toLowerCase().includes(search.toLowerCase())).reverse();
    return tickets; 
  }
  
  useEffect(() => {
    // refetchBookings();
  }, []);
  return (
    <View style={{
      paddingHorizontal:10
    }}>
       {loading ? <ActivityIndicator style={{
        marginTop: 50
      }} size={'large'} color={colors[theme].text} /> : (
        
      <FlatList 
        data={filteredBookings()}
        renderItem={({item}) => <BookingCard logo={logo} setOpenModalQr={setOpenModalQr} item={item} theme={theme} setModal={setModal} setCoverSelected={setCoverSelected} />}
        keyExtractor={item=> item.uuid}
      />
      )}
    </View>
  )
}

export default Bookings
