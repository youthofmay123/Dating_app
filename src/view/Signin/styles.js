import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    logo: {
        width: 90,
        height: 90,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#333',
        opacity: 0.85,
    },
    borderLogo1: {
        position: 'absolute',
        top: -12.5,
        width: 115,
        height: 115,
        borderColor: '#C397F0',
        borderRadius: 100,
        borderWidth: 15,
    },
    borderLogo2: {
        position: 'absolute',
        top: -20,
        width: 130,
        height: 130,
        borderColor: '#EAE0FC',
        borderRadius: 100,
        borderWidth: 10,
    },

    title: {
        fontSize: 28,
        fontWeight: '700',
        marginVertical: 10,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
    },
    buttonsContainer: {
        width: '80%',
        paddingBottom: 30,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        marginVertical: 10,
    },
    googleButton: {
        backgroundColor: 'gray',
    },
    facebookButton: {
        backgroundColor: '#369AE6',
    },
    phoneButton: {
        backgroundColor: '#00BDD5',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
    },
    footer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    footerText: {
        color: '#888',
        fontSize: 12,
        textAlign: 'center',
    },
    linkText: {
        color: '#000',
        textDecorationLine: 'underline',
    },
});

export default styles;
