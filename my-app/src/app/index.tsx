import { Image } from "expo-image"
import * as WebBrowser from 'expo-web-browser';
import { Alert, Button, ScrollView, Text, View, TouchableOpacity, Pressable } from "react-native"
import Card from "../components/Card"

export default function Index() {
    return (
        /* JSX - HTML Javascript */
        <ScrollView>
            <View style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16}}>

                <Image source="https://github.com/gustavolanna11.png" style={{ width: 100, height: 100, borderRadius: 99}} />

                <Text style={{ fontSize: 32 }}>Gustavo Lanna</Text>

                <Button title="Clique aqui" color={"#1d1d1d"} 
                onPress={ () => Alert.alert("Info", "Muito obrigado por clicar") } />

                <Button title='Github' color={"#1d1d1d"} onPress={(e) => {
                    e.preventDefault();
    
                    WebBrowser.openBrowserAsync("https://github.com/gustavolanna11");
                }
                }/> 

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ backgroundColor: "#1d1d1d", padding:16, alignItems: "center" }}
                    onPress={() => Alert.alert("Info", "Você clicou no TouchableOpacity!")}
                    >
                    <Text style={{ color: "#dfdfdf" }}>TouchableOpacity</Text>
                </TouchableOpacity>

                
                <Pressable
                    style={{
                        backgroundColor: "#2ED0FF",
                        padding: 16,
                        alignItems: "center",
                        borderRadius: 8,
                    }}
                    onPress={() => console.log("Clicou no botão")}
                    onLongPress={() => console.warn("Segurou no botão")}
                    onPressOut={() => console.error("Largou do botão")}
                    delayLongPress={1000}
                    >
                    <Text style={{ color: "#1d1d1d" }}>Pressable</Text>
                </Pressable>


            </View>
        </ScrollView>
    )
}