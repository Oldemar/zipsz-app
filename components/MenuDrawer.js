import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {Ionicons} from "@expo/vector-icons";

class MenuDrawer extends Component {

    navLink = () => {
        return(
            store.UserStore.screens.map(
                (nav, ind) => {
                    return(
                        <TouchableOpacity key={ind}
                            style={{height: 50}}
                            onPress={
                                () => this.props.navigation.navigate(nav.navRoute)
                            }
                        >
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View>
                                    <Ionicons
                                        name={nav.navIcon}
                                        color="#000000"
                                        size={32}
                                        style={styles.icon}
                                    />
                                </View>
                                <Text style={styles.link}>{nav.navName}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
            )
        )
    };

    render() {
        return(
            <View style={styles.container} >
                <View style={styles.topLinks}>
                    <View style={styles.profile}>
                        <View style={styles.imgView}>
                            <Image style={styles.img} source={require('../assets/images/me.png')} />
                        </View>
                        <View style={styles.profileText}>
                            <Text style={styles.name}>{store.UserStore.currUser.Personal[0].login}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomLinks}>
                    {this.navLink()}
                </View>
                <View style={styles.footer}>
                    <Text style={styles.description}>
                        ZIPSZ
                    </Text>
                    <Text style={styles.version}>
                        Ver 1.0.0 Beta
                    </Text>
                </View>
            </View>
        )
    }
}
export default MenuDrawer;

const styles =StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'lightgray',
    },
    topLinks:{
        height:160,
        backgroundColor: 'black',
    },
    bottomLinks:{
        flex:1,
        backgroundColor: 'white',
        paddingBottom:450,
    },
    profile:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        paddingTop:25,
        borderBottomWidth:1,
        borderBottomColor:'#777777',
    },
    imgView: {
        flex:1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    img:{
        height: 70,
        width: 70,
        borderRadius:50,
    },
    profileText:{
        flex:3,
        flexDirection: 'column',
        justifyContent:'center',
    },
    name:{
        fontSize: 20,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'left',
    },
    link:{
        flex:1,
        fontSize:18,
        padding: 6,
        paddingLeft: 14,
        margin:5,
        textAlign: 'left',
    },
    icon:{
      padding: 7,
    },
    footer: {
        height:50,
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: 'lightgray'
    },
    version:{
        flex: 1,
        textAlign: 'right',
        marginRight: 20,
        color: 'gray',
    },
    description:{
        flex:1,
        marginLeft:20,
        fontSize: 16,
    }
})
