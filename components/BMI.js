import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Alert, SafeAreaView, TextInput, TouchableOpacity } from 'react-native' 
const BMI=()=>{
    const [weight,setWeight]=useState('')
    const [height,setHeight]=useState('')
    const [BMICal,setBMICal]=useState('')
    const [description,setDescription]=useState('')
    

    const resetBMI=()=>{
        setWeight('');
        setHeight('');
        setBMICal('')
    }

    const calculateBMI=()=>{
        const BMICal= weight/((height/100)*(height/100))
        setBMICal(BMICal.toFixed(1))
        
        if(BMICal< 18.5){
            setDescription('Underweight')
        }
        else if (BMICal>=18.5 && BMICal<=24.9){
            setDescription('Normal')
        }
        else if (BMICal>=25 && BMICal<=29.9){
            setDescription('Overweight')
        }
        else if (BMICal>=29.9){
            setDescription('Obese')
        }
    }    

return(
    <SafeAreaView>
        <Text style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 40,
            marginTop: 40
        }}>BMI Calculator</Text>

        <TextInput
        style={{
            borderWidth: 2,
            padding: 10,
            textAlign: 'center',
            marginHorizontal: 10,
            marginTop: 50,
            borderRadius: 20,
        }}
        placeholder='Weight (KG)'
        placeholderTextColor={'green'}
        value={weight}
        onChangeText={(text)=>setWeight(text)}
        keyboardType='numeric'
        />

<TextInput
        style={{
            borderWidth: 2,
            borderRadius: 20,
            padding: 10,
            textAlign: 'center',
            marginHorizontal: 10,
            marginTop: 50
        }}
        placeholder='Height (CM)'
        placeholderTextColor={'green'}
        value={height}
        onChangeText={(text)=>setHeight(text)}
        keyboardType='numeric'
        />
    <View style={{
        flexDirection:'row',
    }}>
    <TouchableOpacity 
    onPress={console.log({BMICal})}
    onPress={calculateBMI}
    style={{
        backgroundColor: 'crimson',
        padding: 20,
        width: '40%',
        marginTop: 30,
        borderRadius: 10,
        marginHorizontal: 30,
    }}
    >
        <Text>Calculate</Text>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={resetBMI}
    style={{
        backgroundColor: 'crimson',
        padding: 20,
        width: '40%',
        marginTop: 30,
        borderRadius: 10,
    }}
    >
        <Text>Reset</Text>
    </TouchableOpacity>
    </View>

        <View style={{
            marginTop: 80,
            }}>
            <Text style={{
                fontSize: 40,
                textAlign: 'center',
            }}>{BMICal}</Text>
            <Text style={{
                fontSize: 20,
                textAlign: 'center',
            }}>{description}</Text>
        </View>
    </SafeAreaView>
)};

export default BMI