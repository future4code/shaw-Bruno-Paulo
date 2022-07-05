export type moviment ={
  value: number,
  date: string,
  description: string
}

export type user ={
  name: string,
  cpf: number,
  bornDate: string,
  balance: number,
  moviments: moviment[] | any[] | null | undefined
}

export const users: user[] = [
  {
  name: "Bruno",
  cpf:  48050028715,
  bornDate: "21/03/1997",
  balance: 5000,
  moviments: [
    {
      value: 150,
      date: "03/06/2022",
      description: "Mercado piratininga"
    }
  ]
  },
  {
    name: "Pedro",
    cpf:  48055519705,
    bornDate: "15/09/1980",
    balance: 15000,
    moviments: [
      {
        value: 50,
        date: "03/06/2022",
        description: "Cabelereiro dos mano"
      },
      {
        value: 10,
        date: "05/04/2022",
        description: "Bar da dirce"
      }
    ]
    }
];