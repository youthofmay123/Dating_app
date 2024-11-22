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
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchUsers = async () => {
        try {
            const usersRef = collection(database, "users");
            const snapshot = await getDocs(usersRef);
            const usersData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            const filteredUsers = usersData.filter((user) => user.id !== currentUser.id);
            setUsers(filteredUsers); // Lưu người dùng vào state
        } catch (error) {
            console.error("Lỗi khi lấy người dùng:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleGroup}>
                <Text style={styles.title}>Matches </Text>
                <Text>(7)</Text>
            </View>
            <FlatList
                data={users}
                key={users?.id}
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
