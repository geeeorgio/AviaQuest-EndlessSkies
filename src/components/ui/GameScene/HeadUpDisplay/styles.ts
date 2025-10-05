import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  pauseButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  pauseText: {
    fontSize: 20,
    color: COLORS.White,
    textAlign: 'center',
  },
  recordText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.White,
  },

  bottomBar: {
    marginBottom: 20,
    backgroundColor: COLORS.White,
    borderRadius: 8,
    padding: 10,
  },
  ringsCollected: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ringIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 4,
  },
  ringsCount: {
    fontWeight: 'bold',
  },
  fuelContainer: {
    marginTop: 5,
  },
  fuelBarWrapper: {
    height: 20,
    backgroundColor: COLORS.Red,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 5,
  },
  fuelBar: {
    height: '100%',
  },
});
