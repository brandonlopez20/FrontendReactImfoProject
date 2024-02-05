import { 
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";
import img from "./Logo.png";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  col: {
    width: "25%",
    padding: 5,
    border: "1px solid #000",
  },
  img: {
    width: '180px',
    height: '180px',
    marginLeft: "35%"
  }
});

function PDF(props) {
  return (
    <Document>
      <Page>

        <Image style={styles.img} src={img} />

        <View style={styles.container}>
          <Text style={styles.header}>INFORME GENERAL PRODUCTO {props.name}</Text>
          <View style={styles.row}>
            <View style={styles.col}><Text>Columna 1</Text></View>
            <View style={styles.col}><Text>Columna 2</Text></View>
            <View style={styles.col}><Text>Columna 3</Text></View>
            <View style={styles.col}><Text>Columna 4</Text></View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}><Text>Fila 1, Col 1</Text></View>
            <View style={styles.col}><Text>Fila 1, Col 2</Text></View>
            <View style={styles.col}><Text>Fila 1, Col 3</Text></View>
            <View style={styles.col}><Text>Fila 1, Col 4</Text></View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}><Text>Fila 2, Col 1</Text></View>
            <View style={styles.col}><Text>Fila 2, Col 2</Text></View>
            <View style={styles.col}><Text>Fila 2, Col 3</Text></View>
            <View style={styles.col}><Text>Fila 2, Col 4</Text></View>
          </View>
          {/* Agrega más filas según sea necesario */}
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sunt impedit saepe incidunt quaerat sint libero, ab doloremque aliquid harum cupiditate voluptatem odio suscipit error. Accusantium saepe assumenda nostrum error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia nemo consectetur corporis incidunt ipsam commodi aspernatur eos, maxime sit corrupti quidem dolorum iste repellendus maiores? Fugit nobis mollitia obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam sed distinctio quidem consequuntur omnis ipsum veniam sequi neque tempore obcaecati fugit accusantium, voluptatem vel soluta, expedita tenetur recusandae laborum.</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PDF;
