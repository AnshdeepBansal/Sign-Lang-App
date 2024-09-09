import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://img.freepik.com/premium-photo/international-lefthanders-day-copy-space_548646-95606.jpg?w=1060' }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />

        {/* Menu Button */}
        <TouchableOpacity style={styles.menuButton} onPress={openMenu}>
          <Text style={styles.menuButtonText}>☰</Text>
        </TouchableOpacity>

        {/* Side Menu */}
        {menuOpen && (
          <View style={styles.sideMenu}>
            <TouchableOpacity style={styles.closeMenuButton} onPress={closeMenu}>
              <Text style={styles.closeMenuText}>&times;</Text>
            </TouchableOpacity>
            <View style={styles.menuItems}>
              <Text style={styles.menuItem}>Home</Text>
              <Text style={styles.menuItem}>About Us</Text>
              <Text style={styles.menuItem}>How It Works</Text>
              <Text style={styles.menuItem}>Contact</Text>
            </View>
          </View>
        )}

        {/* Main Content */}
        <ScrollView contentContainerStyle={styles.mainContent}>
          <Text style={styles.heading}>Communicate Without Barriers</Text>
          <Text style={styles.description}>
            Connect using sign language for smooth and meaningful communication.
          </Text>


          {/* Role Selection */}
          <View style={styles.roleSelection}>
            <View style={styles.roleCard}>
              <Image
                source={{ uri: 'https://img.icons8.com/color/96/hearing-aid.png' }}
                style={styles.roleIcon}
              />
              <Text style={styles.roleTitle}>Deaf or Hard of Hearing</Text>
              <TouchableOpacity style={styles.roleButton}>
                <Text style={styles.roleButtonText}>Select Role</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.roleCard}>
              <Image
                source={{ uri: 'https://img.icons8.com/color/96/handshake.png' }}
                style={styles.roleIcon}
              />
              <Text style={styles.roleTitle}>Sign Language Interpreter</Text>
              <TouchableOpacity style={styles.roleButton}>
                <Text style={styles.roleButtonText}>Select Role</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Get Started Button */}
          <TouchableOpacity style={styles.getStartedButton}>
            <Text style={styles.getStartedButtonText}>Get Started Now</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
  menuButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#333',
    paddingTop: 60,
    zIndex: 1000,
  },
  closeMenuButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeMenuText: {
    fontSize: 36,
    color: '#fff',
  },
  menuItems: {
    paddingHorizontal: 20,
  },
  menuItem: {
    color: '#fff',
    fontSize: 18,
    paddingVertical: 15,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
    marginTop:40,
  },
  description: {
    fontSize: 18,
    color: '#ddd',
    textAlign: 'center',
    marginVertical: 10,
  },
  downloadButtons: {
    flexDirection: 'coluom',
    justifyContent: 'center',
    marginVertical: 20,
    gap:10,
  },
  appButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  appButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  roleSelection: {
    marginLeft:10,
    flexDirection: 'coloum',
    justifyContent: 'space-around',
    alignItems:'center',
    marginVertical: 10,
  },
  roleCard: {
    backgroundColor: '#cfefff',
    borderRadius: 15,
    padding: 5,
    alignItems: 'center',
    justifyContent:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    width:240,
    height:200,
    transform:[{scale:0.8}]
  },
  roleIcon: {
    width: 60,
    height: 60,
    marginTop:5,
    marginBottom: 15,
  },
  roleTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  roleButton: {
    backgroundColor: '#7a5cff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  roleButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  getStartedButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;