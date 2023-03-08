export const variables = {
  backgroundPrimary: '#fefeff',
  backgroundSecondary: '#f4f5f3',
  textPrimary: '#4b4a4a',
  textSecondary: '#bdbcc0',
  iconPrimary: '#4b4a4a',
  iconSecondary: '#73e551',
}

export const theme = {
  roundButton: {
    width: 50,
    height: 50,
    backgroundColor: '#323332',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginHorizontal: 10
  },
  screenPrimary: {
    paddingHorizontal: 25,
    backgroundColor: variables.backgroundPrimary,
    height: '100%'
  },
  title: {
    fontSize: 25,
    color: variables.textPrimary
  },
  subtitle: {
    fontSize: 20,
    color: variables.textPrimary
  },
  gradientPrimary: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80
  }
}