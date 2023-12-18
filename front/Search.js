import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // ... 他のデータ
  ]);

  // テキストが変更されたときに呼ばれるハンドラ
  const handleSearch = (text) => {
    setSearchText(text);

    // データを検索して表示するロジック
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <View>
      {/* 検索ボックス */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchText}
      />

      {/* 検索結果を表示するリスト */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </View>
  );
};

export default SearchComponent;
