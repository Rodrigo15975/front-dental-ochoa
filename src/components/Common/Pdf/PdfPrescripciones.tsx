import { HistoryPrescripcione } from "@/services/pacientes/types/typesPaciente";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#f5f5f5",
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 12,
    color: "rgb(34, 85, 255)",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  section: {
    marginBottom: 20,
  },
  table: {
    width: "auto",
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableHeader: {
    backgroundColor: "rgb(15, 71, 255)",
    color: "white",
    fontWeight: "bold",
    padding: 8,
  },
  tableCellHeader: {
    width: "50%",
    borderStyle: "solid",
    // borderColor: "#e0e0e0",
    // borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    padding: 8,
    fontSize: 12,
    fontWeight: "bold",
  },
  tableCell: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    padding: 8,
    fontSize: 12,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: "100%",
  },
  footer: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
    color: "#888",
  },
  firma: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 16,
  },
});
type Props = {
  data: HistoryPrescripcione;
  logo: string;
  title: string;
};

const PdfPrescripciones = ({ data, logo, title }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image style={styles.logo} src={logo} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>Prescripción</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCellHeader}>Campo</Text>
            <Text style={styles.tableCellHeader}>Detalles</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Fecha de Creación:</Text>
            <Text style={styles.tableCell}>
              {data.fechaPrescripcion} {data.horaPrescripcion}
            </Text>
          </View>
          <View style={styles.tableRow}></View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Médico:</Text>
            <Text
              style={styles.tableCell}
            >{`${data.medico.name} ${data.medico.apellidos}`}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Receta:</Text>
            <Text style={styles.tableCell}>{data.prescripcion}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Nota Adicional:</Text>
            <Text style={styles.tableCell}>{data.notaAdicional}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.footer}>
        Este documento es una prescripción médica generada electrónicamente
      </Text>
      {/* <View style={styles.firma}>
        <Text style={{ fontSize: "12" }}>Firma:</Text>
      </View> */}
    </Page>
  </Document>
);

export const PrescripcionPdfDownload = ({ data, logo, title }: Props) => (
  <div>
    <PDFDownloadLink
      document={<PdfPrescripciones data={data} logo={logo} title={title} />}
      fileName="prescripcion.pdf"
      className="text-default"
    >
      {({ loading }) => (loading ? "Cargando documento..." : "Descargar")}
    </PDFDownloadLink>
  </div>
);
