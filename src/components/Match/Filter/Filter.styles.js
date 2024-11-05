import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //----------------------------------------------------------
    /** Common styles **/
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        color: '#00BDD6',
        paddingVertical: 20,
    },
    borderBox: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#F3F4F6',
        padding: 10,
    },
    /** End of common styles **/
    //----------------------------------------------------------

    //----------------------------------------------------------
    /** Gender styles **/
    genderWrapper: {
        flex: 4,
    },
    tableContainer: {
        paddingHorizontal: 10,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tableRowText: {
        paddingTop: 15,
    },
    /** End of gender styles **/
    //----------------------------------------------------------

    /** Age styles **/
    ageWrapper: {
        flex: 2,
    },
    /** End of age styles **/
    //----------------------------------------------------------

    /** Distance styles **/
    distanceWrapper: {
        flex: 2,
    },
    switch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },
    switchTitle: {
        width: '65%',
    },
    /** End of distance styles **/
    //----------------------------------------------------------

    /** Language styles **/
    languageWrapper: {
        flex: 2,
        paddingBottom: 15,
    },
    /** End of language styles **/
    //----------------------------------------------------------

    /** Footer styles **/
    footer: {
        padding: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: '#F3F4F6',
    },
    btn: {
        width: 180,
        height: 50,
    },
    btnClear: {
        backgroundColor: '#F3F4F6',
    },
    btnApply: {
        backgroundColor: '#00BDD6',
    },
    /** End of footer styles **/
});

export default styles;
