import {router} from 'expo-router';
import {Text, View, StyleSheet} from 'react-native';

import {useSession} from '@/context/auth';

export default function SignIn() {
    const {signIn} = useSession();
    return (
        <View style={styles.container}>
            <Text
                style={styles.signInText}
                onPress={() => {
                    signIn();
                    // Navigate after signing in. You may want to tweak this to ensure sign-in is
                    // successful before navigating.
                    router.replace('/');
                }}>
                Sign In
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    signInText: {
        fontSize: 20,
        color: '#007BFF',
        textDecorationLine: 'underline',
    },
});