import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Switch, Button } from 'react-native-paper';

const Configuracoes = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>Preferências</List.Subheader>
        
        <List.Item
          title="Modo Escuro"
          left={() => <List.Icon icon="theme-light-dark" />}
          right={() => (
            <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} />
          )}
        />

        <List.Item
          title="Notificações"
          left={() => <List.Icon icon="bell" />}
          right={() => (
            <Switch value={notificationsEnabled} onValueChange={() => setNotificationsEnabled(!notificationsEnabled)} />
          )}
        />
      </List.Section>

      <Button mode="contained" style={styles.logoutButton} onPress={() => console.log('Logout')}>Sair</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  logoutButton: {
    marginTop: 20,
  },
});

export default Configuracoes;