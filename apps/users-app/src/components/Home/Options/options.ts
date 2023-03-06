import { ComponentProps } from 'react';
import { Ionicons } from '@expo/vector-icons';

interface OptionType {
    name: string; 
    icon: ComponentProps<typeof Ionicons>["name"];
    type: string;
  }
  
const options:OptionType[] = [
      {
      name: 'Todo',
      type: '',
      icon: 'ios-grid-outline'
  },
  {
      name: 'Discotecas',
      type: 'Discoteca',
      icon: 'ios-disc-outline'
  },
  {
      name: 'Bares',
      type: 'bar',
      icon: 'ios-wine-outline'
  },
  {
      name: 'Gastrobares',
      type: 'Gastrobar',
      icon: 'ios-beer-outline'
  }
  ]
  
  export default options;