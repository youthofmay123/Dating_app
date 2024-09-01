import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#333',
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
    },
    buttonsContainer: {
        width: '80%',
        marginBottom: 30,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        marginVertical: 10,
    },
    appleButton: {
        backgroundColor: '#000',
    },
    facebookButton: {
        backgroundColor: '#1877F2',
    },
    phoneButton: {
        backgroundColor: '#00C1D4',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
    },
    footer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
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
