import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';

const CreateAccount = () => {
    const width = useSharedValue(100);

    const handlePress = () => {
        width.value += 50;
      };
    return (
        <View style={styles.container}>
        <Animated.View style={{ ...styles.box, width }} />
        <Button onPress={handlePress} title="Click me" />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      box: {
        height: 100,
        backgroundColor: '#b58df1',
        borderRadius: 20,
        marginVertical: 64,
      },
});

export default CreateAccount;