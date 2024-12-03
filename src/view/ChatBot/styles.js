import { StyleSheet } from 'react-native';
import color from '../../components/color/color';
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', marginTop: 2 },
    groupAction: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    groupActionRight: { flexDirection: 'row', alignItems: 'center' },
    header: { padding: 10, borderBottomWidth: 1, borderColor: '#eee' },
    info: { flexDirection: 'row', padding: 10 },
    avatar: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
    userInfo: { flex: 1 },
    userName: { fontSize: 18, fontWeight: 'bold', flexDirection: 'row', alignItems: 'center', paddingBottom: 5 },
    userPronouns: {
        fontSize: 12,
        color: color.primary,
        backgroundColor: color.second,
        width: 100,
        borderRadius: 10,
        marginBottom: 3,
        padding: 2,
        textAlign: 'center',
    },
    userJob: { fontSize: 12, color: '#666' },
    profileButton: {
        padding: 5,
        backgroundColor: color.second,
        borderRadius: 100,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageContainer: { flex: 1, padding: 3 },
    dateLabel: { alignSelf: 'center', color: '#aaa' },
    messageBubbleOfMe: {
        alignSelf: 'flex-end',
        padding: 10,
        paddingTop: 0,
        borderRadius: 20,
    },
    messageBubbleOfYou: {
        alignSelf: 'flex-start',
        padding: 10,
        paddingTop: 0,
        borderRadius: 20,
    },

    messageText: { color: color.white, backgroundColor: color.primary, padding: 10, borderRadius: 10, maxWidth: 170 },
    timeLabel: { fontSize: 10, color: '#666', textAlign: 'left', paddingBottom: 5 },
    status: { fontSize: 10, color: '#666', textAlign: 'right', paddingBottom: 5 },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderColor: '#eee',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        flex: 1,
        padding: 7,
        paddingLeft: 20,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 5,
        backgroundColor: 'white',
    },
    groupSend: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, paddingTop: 0 },
});

export default styles;
