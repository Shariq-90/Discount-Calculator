import React, {useState,useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
  
  
  
const MainScreen =({navigation})=>{
  const [original_price,set_original_price]=useState("");
  const [discount_percentage,set_discount_percentage]=useState("");
  const [save_price,set_save_price]=useState("");
  const [final_price,set_final_price]=useState("");
  const [history,setHistory]=useState("");
  const [error,setError]=useState("");
  
  useEffect(() => {
      if(original_price>0 && original_price != ""){
      if(discount_percentage>0 && discount_percentage <=100){
        set_save_price(original_price*(discount_percentage/100).toFixed(2))
        set_final_price(original_price - original_price*(discount_percentage/100)          .toFixed(2))
        }
      else{
          setError("Discount can't be less than 0 and greater than 100")
      }
    }
      else{
         setError("Price can't be in negative numbers")
    }
    }, [original_price,discount_percentage]);

    const saveHandler = () =>{
      if(error == ""){
        let data ={
          id: Math.floor(Math.random()*100),
          original_price,
          discount_percentage,
          final_price,
          save_price};
          setHistory((history) => [data,...history]);
          set_original_price("")
          set_discount_percentage("")
          setError("")
      }
    };
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Discount Calculator</Text>
        <Text style={styles.text}>Enter your original price:</Text>
        <TextInput 
        placeholder="Original Price" 
        style={styles.input}
        value={original_price}
        keyboardType="numeric"
        onChangeText={(e) => set_original_price(e)}></TextInput>
        <Text>Enter your discount percentage:</Text>
        <TextInput 
        placeholder="Discount %" 
        style={styles.input}
        value={discount_percentage}
        keyboardType="numeric"
        onChangeText={(e) => set_discount_percentage(e)}>
        </TextInput>
        <Text>
        {error}
        </Text>
        <Text style={styles.result}>You Saved:{save_price}</Text>
        <Text style={styles.result}>Final Price:{final_price}</Text>
        <TouchableOpacity style={styles.button} onPress={saveHandler}>Save It</TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigation.navigate("History")}>
        History
        </TouchableOpacity>
      <View>
        <Text>User Instruction</Text>
        <Text>Enter original price of your product</Text>
        <Text>Enter the dicounted percentage and you will get results</Text>
        <Text>If you want to save the result then press on save it</Text>
        <Text>Through history you can see the history of saved item</Text>
      </View>
      </View>
      
      
  );
 };
const styles = StyleSheet.create({
  container: {
    alignContent:"center",
  },
  header: {
    textAlign: "center",
    backgroundColor: "grey",
    padding: 5,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily:"Sanserif",
    marginBottom:50,
    color:"white",
    shadowOpacity:2,


  },
  input: {
    marginTop:5,
    borderWidth: 2,
    width: "50%",
    margin:"auto",
    height:40,
    borderRadius: 12,
    borderColor: "silver",
    fontFamily:"Sanserif",

  },
  button: {
    padding:10,
    textAlign:"center",
    borderRadius:10,
    marginTop:15,
    margin:"auto",
    backgroundColor:"grey",
    width:"50%",
    marginBottom:5,
    fontFamily:"Sanserif",
    shadowOpacity:2,
    color:"white",
  },
  result:{
    padding:5,
    marginBottom:5,
    backgroundColor:"grey",
    fontSize:20,
    fontFamily:"Sanserif",
    fontWeight:"bold",
    color:"white",

  }
});
export default MainScreen;