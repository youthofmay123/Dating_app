import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15,
    },
    // Common
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 30,
        paddingBottom: 20,
    },
    // Card
    cardWrapper: {
        marginTop: 50,
        flex: 1,
    },
    // Location
    locationWrapper: {
        backgroundColor: '#EBFDFF',
        padding: 15,
        borderRadius: 5,
        borderColor: '#F3F4F6',
        borderWidth: 1,
        marginHorizontal: 5,
        marginTop: 20,
    },
    // About
    aboutWrapper: {
        marginHorizontal: 5,
    },
    // Details
    detailsWrapper: {
        marginHorizontal: 5,
    },
    // Enjoy
    enjoyWrapper: {
        marginHorizontal: 5,
    },
    // Communicate
    comunicateWrapper: {
        marginHorizontal: 5,
    },
    // Image
    imageWrapper: {
        marginHorizontal: 5,
        marginBottom: 20,
        paddingTop: 50,
    },
    // Button
    buttonWrapper: {
        marginHorizontal: 5,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn: {
        borderRadius: 100,
        padding: 15,
        margin: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.2,
    },
});

export default styles;
