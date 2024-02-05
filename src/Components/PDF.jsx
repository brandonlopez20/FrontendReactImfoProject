import { 
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  View
} from "@react-pdf/renderer"
import img from "./Logo.png"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  img: {
    width: '200px',
    height: '200px',
  }
})


function PDF(props){
  return (
    <Document>
      <Page>
        <View style={styles.container}>
        <Text>INFORME GENERAL PRODUCTO {props.name}</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur </Text>
        </View>
      </Page>
    </Document>
  );
}

export default PDF