import { View, Text, StyleSheet } from "react-native"
import CheckIcon from '../assets/check.svg';
import { theme, variables } from "../theme";

const CoverItem = ({ name, cc, coverType, date, checked }) => {
  return (
    <View style={styles.container}>
      <View style={styles.column1}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>C.C {cc}</Text>
      </View>

      <View style={styles.column2}>
        <Text style={styles.title}>{coverType}</Text>
        <Text style={styles.subtitle}>{date}</Text>
      </View>

      <CheckIcon
        width={40}
        height={40}
        color={ checked ? variables.iconSecondary : variables.iconPrimary }
        style={styles.checkIcon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    backgroundColor: variables.backgroundSecondary,
    marginBottom: 14
  },
  column1: {
    width: '45%',
  },
  column2: {
    width: '40%',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    color: variables.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: '#b6b4b9'
  },
  checkIcon: {
    width: '15%'
  }
})

export default CoverItem