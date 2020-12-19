import React, { useState } from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import { DataTable } from "react-native-paper";

  const History = ({route, navigation}) => {
    const data_saved = route.params.data_saved;
    const [discount_history, set_discount_history] = useState(data_saved)

    const delHandler = (id) => {
		set_discount_history(() =>
		discount_history.filter((item) => {
				return item.id !== id;
			})
		);
	};


  return(
    <View>  
    <Text style={styles.header}>History</Text>
   <DataTable>
      <DataTable.Header>
        <DataTable.Title>Original Price</DataTable.Title>
        <DataTable.Title>Discount Percentage</DataTable.Title>
        <DataTable.Title>Final Price</DataTable.Title>
        <DataTable.Title>Delete</DataTable.Title>
      </DataTable.Header>
      {discount_history.map((row) => {
      const { id, original_price, discount_percentage, final_price } = row;
      return (<DataTable.Row key={id}>
          <DataTable.Cell>{original_price}$</DataTable.Cell>
          <DataTable.Cell>{discount_percentage}%</DataTable.Cell>
          <DataTable.Cell>{final_price}$</DataTable.Cell>
          <DataTable.Cell><Button title="X"
              onPress={() => delHandler(id)} color="red"/>
          </DataTable.Cell>
          </DataTable.Row>);}
          )}</DataTable>
    </View>
  )
  };
const styles = StyleSheet.create({
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
  }
  });