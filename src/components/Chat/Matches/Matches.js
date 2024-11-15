import { FlatList, Image, Text, View } from 'react-native';
import styles from './styles';
import Item from '../Item';
import { useSelector } from 'react-redux';
import userDetail from '../../../constants/userDetail';
import { database, collection, getDocs, query, where } from '../../../firebase/config';
import { useEffect, useState } from 'react';

const Matches = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    // const [users, setUsers] = useState([]);
    const users = userDetail.filter((user) => user.id !== currentUser?.id);

    // useEffect(() => {
    // const fetchUsers = async () => {
    // try {
    // const usersRef = collection(database, 'users');
    // const querySnapshot = await getDocs(usersRef);
    //
    // const usersList = querySnapshot.docs
    // .map((doc) => ({ id: doc.id, ...doc.data() })) // Lấy dữ liệu thực tế từ mỗi tài liệu
    // .filter((user) => user.id !== currentUser?.id); // Lọc user hiện tại ra khỏi danh sách
    //
    // setUsers(usersList);
    // } catch (error) {
    // console.error('Error fetching users: ', error);
    // }
    // };
    //
    // fetchUsers();
    // }, []);
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleGroup}>
                <Text style={styles.title}>Matches </Text>
                <Text>(7)</Text>
            </View>
            <FlatList
                data={users}
                horizontal
                keyExtractor={(item) => item?.id}
                renderItem={({ item }) => <MatchItem {...item} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const MatchItem = ({ name, photos, status }) => {
    return (
        <View style={styles.itemContainer}>
            <Item avatar={photos[0]?.url} status={status} size={60} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

export default Matches;
