import { Image } from "expo-image";
import * as WebBrowser from 'expo-web-browser';
import { Alert, ScrollView, Text, View, TouchableOpacity, Pressable, StyleSheet } from "react-native";
import Card from "../components/Card";

const handlePressable = () => {
    Alert.alert('Ação', 'Pressable Pressionado!');
};

export default function Index() {
    return (
        <ScrollView style={{ backgroundColor: '#000' }}>
            <View style={styles.container}>

                <Image source="https://github.com/gustavolanna11.png" style={styles.avatar} />

                <Text style={styles.title}>Gustavo Lanna</Text>

                <TouchableOpacity
                    style={styles.customButton}
                    activeOpacity={0.7}
                    onPress={() => Alert.alert("Info", "Muito obrigado por clicar")}
                >
                    <Text style={styles.customButtonText}>Clique aqui</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.customButton}
                    activeOpacity={0.7}
                    onPress={() => {
                        WebBrowser.openBrowserAsync("https://github.com/gustavolanna11");
                    }}
                >
                    <Text style={styles.customButtonText}>Github</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.touchableOpacity}
                    onPress={() => Alert.alert("Info", "Você clicou no TouchableOpacity!")}
                >
                    <Text style={styles.touchableOpacityText}>TouchableOpacity</Text>
                </TouchableOpacity>

                <Pressable
                    style={({ pressed }) => [
                        styles.pressable,
                        pressed && styles.pressed
                    ]}
                    onPress={handlePressable}
                    onLongPress={() => Alert.alert('Ação', 'Segurou no botão!')}
                    delayLongPress={1500}
                >
                    <Text style={styles.pressableText}>Pressable</Text>
                </Pressable>

                <Card
                  title="Primeiro Card"
                  body="Corpo do Card"
                  href={"/buttons"}
                />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 32,
        gap: 16,
        backgroundColor: "#000"
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 99,
        borderWidth: 2,
        borderColor: "#fff"
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#eee",
        marginBottom: 10,
    },
    customButton: {
        backgroundColor: "#222",
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: "center",
        width: "100%",
        marginVertical: 6,
    },
    customButtonText: {
        color: "#eee",
        fontWeight: "bold",
        fontSize: 16,
    },
    touchableOpacity: {
        backgroundColor: "#222",
        padding: 16,
        alignItems: "center",
        borderRadius: 8,
    },
    touchableOpacityText: {
        color: "#eee",
        fontWeight: "bold",
    },
    pressable: {
        backgroundColor: "#c0392b",
        paddingVertical: 16,
        alignItems: "center",
        borderRadius: 15,
        width: "100%",
        marginTop: 10,
    },
    pressed: {
        backgroundColor: "#e74c3c",
        opacity: 0.9,
    },
    pressableText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
