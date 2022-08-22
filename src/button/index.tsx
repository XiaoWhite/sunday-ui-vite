// import { defineComponent, PropType } from 'vue';

// import 'uno.css';

// export type ISize = 'small' | 'medium' | 'large';
// export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
// export const props = {
//   size: {
//     type: String as PropType<ISize>,
//     default: 'medium'
//   },
//   color: {
//     type: String as PropType<IColor>,
//     default: 'blue'
//   }
// };

// export default defineComponent({
//   name: 'SButton',
//   props,
//   setup(props, { slots }) {
//     const size = {
//       small: {
//         x: '2',
//         y: '1',
//         text: 'sm'
//       },
//       medium: {
//         x: '3',
//         y: '2',
//         text: 'base'
//       },
//       large: {
//         x: '4',
//         y: '3',
//         text: 'lg'
//       }
//     };

//     return () => (
//       <button
//         class={`
// 				py-${size[props.size].y}
// 				px-${size[props.size].x}
// 				font-semibold
// 				rounded-lg
// 				shadow-md
// 				text-white
// 				bg-${props.color}-400
// 				hover:bg-${props.color}-500
// 				border-none
//         text-${size[props.size].text}
// 				cursor-pointer`}
//       >
//         {slots.default ? slots.default() : ''}
//       </button>
//     );
//   }
// });

import { defineComponent, PropType } from 'vue';
import 'uno.css';

export type ISize = 'small' | 'medium' | 'large';
export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';

export const props = {
  // 新增
  size: {
    type: String as PropType<ISize>,
    default: 'medium'
  },

  color: {
    type: String as PropType<IColor>,
    default: 'blue'
  },

  round: {
    type: Boolean,
    default: false
  },

  plain: {
    type: Boolean,
    default: false
  },

  icon: {
    type: String,
    default: ''
  }
} as const;

export default defineComponent({
  name: 'SButton',
  props,
  setup(props, { slots }) {
    console.log(`html`, document.querySelector(`#app`)?.innerHTML);

    const size = {
      small: {
        x: '2',
        y: '1',
        text: 'sm'
      },
      medium: {
        x: '3',
        y: '2',
        text: 'base'
      },
      large: {
        x: '4',
        y: '3',
        text: 'lg'
      }
    };

    return () => (
      <button
        class={`
          py-${size[props.size].y}
          px-${size[props.size].x}
          ${props.round ? 'rounded-full' : 'rounded-lg'}
          bg-${props.color}-${props.plain ? '100' : '500'}
          hover:bg-${props.color}-400
          border-${props.color}-${props.plain ? '500' : '500'}
          cursor-pointer
          border-solid
          text-${props.plain ? props.color + '-500' : 'white-500'}
          text-${size[props.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1
          `}
      >
        {props.icon !== '' ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ''}
        {slots.default ? slots.default() : ''}
      </button>
    );
  }
});
