import {StyleSheet, Text, View} from 'react-native';

import {useSession} from '@/context/auth';
import TabLayout from "@/app/(app)/(tabs)/_layout";

export default function Index() {
    const {signOut} = useSession();
    return (
        <View style={styles.container}>
            <Text
                onPress={() => {
                    // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
                    signOut();
                }}>
                Sign Out
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})