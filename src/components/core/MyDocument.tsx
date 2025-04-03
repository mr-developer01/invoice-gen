import {
  Page,
  Text,
  Document,
  StyleSheet,
  Image,
  Font,
  View,
} from "@react-pdf/renderer";

import { Invoice } from "../../store/slices/invoiceSlice";

// Create styles
Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 15,
    fontFamily: "Oswald",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 10,
    margin: 3,
    fontFamily: "Oswald",
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
    opacity: 0.6,
  },
  image: {
    marginVertical: 5,
    marginHorizontal: 3,
    width: 40,
  },
  header: {
    fontSize: 8,
    marginBottom: 10,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  line: {
    width: "100%",
    backgroundColor: "black",
    height: 0.5,
  },
  table: {
    marginTop: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "10px",
  },
});

type TnvoiceData = {
  invoiceData: Invoice | undefined;
};

// Create Document Component
const MyDocument = ({ invoiceData }: TnvoiceData) => {
  console.log(invoiceData, "Data from pdf");

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          {`~ Invoice Registered at: ${invoiceData?.date} ~`}
        </Text>
        <View style={styles.title}>
          <Text style={styles.title}>User Invoice</Text>
          <Image
            style={styles.image}
            src="https://www.pymnts.com/wp-content/uploads/2015/11/invoice.jpg"
          />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.subtitle}>
          Invoice Id: <Text style={styles.text}>{invoiceData?.id}</Text>
        </Text>
        <Text style={styles.subtitle}>
          Client Id: <Text style={styles.text}>{invoiceData?.clientId}</Text>
        </Text>
        <View style={styles.line}></View>
        <Text style={styles.text}>Services Provided:</Text>
        <View style={styles.table}>
          <View>
            <Text>Description</Text>
            {invoiceData?.services?.map((data, index) => (
              <Text style={{ marginTop: "8px", opacity: 0.6 }} key={index}>
                {data.description}
              </Text>
            ))}
          </View>
          <View>
            <Text>Rate</Text>
            {invoiceData?.services?.map((data, index) => (
              <Text style={{ marginTop: "8px", opacity: 0.6 }} key={index}>
                {data.rate}
              </Text>
            ))}
          </View>
          <View>
            <Text>Currency</Text>
            {invoiceData?.services?.map((data, index) => (
              <Text
                style={{ marginTop: "8px", opacity: 0.6, fontSize: "10px" }}
                key={index}
              >
                {data.currency}
              </Text>
            ))}
          </View>
          <View>
            <Text>Date Of Service</Text>
            {invoiceData?.services?.map((data, index) => (
              <Text style={{ marginTop: "8px", opacity: 0.6 }} key={index}>
                {data.time}
              </Text>
            ))}
          </View>
        </View>

        <View style={{ margin: "10px 0px" }}>
          <Text style={styles.text}>Payment Details:</Text>
          <View style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <Text style={{ marginTop: "2px", fontSize: "10px" }}>
              Total Amount :
            </Text>
            <Text style={{ marginTop: "2px", opacity: 0.6, fontSize: "10px" }}>
              {invoiceData?.payment?.totalAmount}
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <Text style={{ marginTop: "2px", fontSize: "10px" }}>
              Amount Paid :
            </Text>
            <Text style={{ marginTop: "2px", opacity: 0.6, fontSize: "10px" }}>
              {invoiceData?.payment?.amountPaid}
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <Text style={{ marginTop: "2px", fontSize: "10px" }}>
              Remaining Balance :
            </Text>
            <Text style={{ marginTop: "2px", opacity: 0.6, fontSize: "10px" }}>
              {invoiceData?.payment?.remaining}
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <Text style={{ marginTop: "2px", fontSize: "10px" }}>
              Payment Status :
            </Text>
            <Text style={{ marginTop: "2px", opacity: 0.6, fontSize: "10px" }}>
              {invoiceData?.payment?.isPaid ? "All Cleared" : "Pending"}
            </Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "10px 0px",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: "13px" }}>Note:</Text>{" "}
          {invoiceData?.payment?.remaining === 0 ? (
            <Text style={{ fontSize: "10px" }}>
              Thank you for your business! We will meet again.
            </Text>
          ) : (
            <Text style={{ fontSize: "10px" }}>
              Please complete the remaining payment of $
              {invoiceData?.payment?.remaining} at the earliest convenience.
              Thank you for your business!
            </Text>
          )}
        </View>
        <View style={styles.line}></View>

        <View style={{marginTop: '20px'}}>
          <Text style={{fontSize: '13px'}}>Authorized Signature: </Text>
          <Text style={{fontSize: '10px', color: '#C5600D'}}>Appstech ERP Solution...</Text>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default MyDocument;
