import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import React, { FC } from "react";
import { IStoreTemplate } from "@/typings";
import { colors } from "@/desingSystem";
import { ListCard, ListDetail, ListService } from "@/components/molecules";


const { width, height } = Dimensions.get("window");

const componentMap = {
  listCard: ListCard,
  listDetail: ListDetail,
  listService: ListService,
  none: () => null,
};

type ComponentType = keyof typeof componentMap;

interface DynamicComponentProps {
  typeTemplate: ComponentType;
}
export const StoreTemplate: FC<Partial<IStoreTemplate>> = ({
  title,
  style,
  styleContent,
  typeTemplate='none'
}) => {

  const itesNumber = [0,1,2,3,4,5,6]
  const ComponentToRender = componentMap[typeTemplate];
  const numColumns = 2;
const data = [
  { id: '1', title: 'Card 1' },
  { id: '2', title: 'Card 2' },
  { id: '3', title: 'Card 3' },
  { id: '4', title: 'Card 4' },
  { id: '5', title: 'Card 4' },
  { id: '6', title: 'Card 4' },
  { id: '7', title: 'Card 4' },
  { id: '8', title: 'Card 4' },
  { id: '9', title: 'Card 4' },
];
   
const formatData = (data:any, numColumns:any) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ id: `blank-${numberOfElementsLastRow}`, title: '', empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const renderItem = ({ item }:any) => {
  if (item.empty) {
    return <View style={[styles.card, styles.cardInvisible]} />;
  }
  // return <ListCard nameProduct={"flat list"} price={0} description={"flat list"}  />;
return <ComponentToRender nameProduct={item.title} price={0} description={item.title}/> 
};
  return (
   
     
        <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}/>
      
     
  );
};

const styles = StyleSheet.create({
  listCardContainer:{
    display : 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width:'100%',
    height:'auto'
  },
  listCardContent:{
    backgroundColor: colors.gray[100],
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex:1,
    marginVertical: 25,
  },
  card: {
    flex: 1,
    margin: 10,
  },
  cardInvisible: {
    backgroundColor: 'transparent',
  },
});
