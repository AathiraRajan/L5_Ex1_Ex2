import React from 'react';
import { FlatList,SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


// //Exercise 1
// const App = () => {
//     // Data source with the letters of the alphabet
//     const datasource = [
//         { key: 'a' },
//         { key: 'b' },
//         { key: 'c' },
//         { key: 'd' },
//         { key: 'e' },
//         { key: 'f' },
//         { key: 'g' },
//         { key: 'h' },
//         { key: 'i' },
//         { key: 'j' },
//         { key: 'k' },
//         { key: 'l' },
//         { key: 'm' },
//         { key: 'n' },
//         { key: 'o' },
//         { key: 'p' },
//         { key: 'q' },
//         { key: 'r' },
//         { key: 's' },
//         { key: 't' },
//         { key: 'u' },
//         { key: 'v' },
//         { key: 'w' },
//         { key: 'x' },
//         { key: 'y' },
//         { key: 'z' },
//     ];
//
//     // Function to render each item
//     const renderItem = ({ item }) => {
//         return (
//             <TouchableOpacity style={styles.opacityStyle}>
//                 <Text style={styles.textStyle}>{item.key}</Text>
//             </TouchableOpacity>
//         );
//     };
//
//     return (
//         <View style={{ flex: 1, paddingTop: 50 }}>
//             <FlatList
//                 data={datasource}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.key}
//             />
//         </View>
//     );
// };
//
// // StyleSheet for the app
// const styles = StyleSheet.create({
//     opacityStyle: {
//         borderWidth: 1,
//         padding: 10,
//         marginVertical: 5,
//         marginHorizontal: 20,
//     },
//     textStyle: {
//         fontSize: 18,
//         margin: 10,
//         textAlign: 'left',
//     },
// });
//
// export default App;


// Exercise 2
const App = () => {
    // Updated data source with sections
    const datasource = [
        {
            data: [
                { key: 'a' },
                { key: 'e' },
                { key: 'i' },
                { key: 'o' },
                { key: 'u' },
            ],
            title: "Vowels",
        },
        {
            data: [
                { key: 'b' },
                { key: 'c' },
                { key: 'd' },
                { key: 'f' },
                { key: 'g' },
                { key: 'h' },
                { key: 'j' },
                { key: 'k' },
                { key: 'l' },
                { key: 'm' },
                { key: 'n' },
                { key: 'p' },
                { key: 'q' },
                { key: 'r' },
                { key: 's' },
            ],
            title: "Consonants",
        },
    ];

    // Function to render each item
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemStyle}>
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={[styles.headerText, title === "Vowels" ? styles.vowelHeader : styles.consonantHeader]}>
                        {title}
                    </Text>
                )}
                keyExtractor={(item, index) => item.key + index}
            />
        </View>
    );
};

// StyleSheet for the app
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#f9f9f9',
    },
    itemStyle: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    textStyle: {
        fontSize: 15,
        textAlign: 'left',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        color: '#fff',
    },
    vowelHeader: {
        backgroundColor: '#6ec1e4', // Light blue
    },
    consonantHeader: {
        backgroundColor: '#f1c40f', // Yellow
    },
});

export default App;
