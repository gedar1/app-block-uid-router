import { Icon } from '@/components/atoms';
import { IStartRating } from '@/typings';
import React, { FC } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';


export const StarRating : FC<Partial<IStartRating>> = ({ rating = 0, onRatingChange }) => {

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i}>
          <Icon iconName={i <= rating ? 'star' : 'star-outlined'} isOnPress={false} iconSize={20} iconColor="#FFD700" />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  }, 
});

