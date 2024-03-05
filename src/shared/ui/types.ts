declare namespace TypesUi {
   interface IButton {
      variant: boolean;
      width: string;
      text: string
   }
   interface IbuttonSave {
      text: string;
      color?: string;
      backgroundColor?: string;
   }
   interface Icheck {
      name: string;
   }
   interface Idata {
      name: string;
      dates: string;
      src: string;
   }
   interface Iselect {
      name?: string;
      width?: string;
   }
   interface IInput {
      width: string;
      placeholder: string;
   }
   interface Itext {
      placeholder: string;
   }
}
