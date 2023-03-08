import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        width: '100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        gap: 20
    },
    input: {
        height: 50,
        width: '100%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFF'
    },
    button: {
        width: '100%',
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#FFE243'
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16,
        color: '#333'
    }
})

export default styles;