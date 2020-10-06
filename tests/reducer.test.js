import reducers from "../src/js/redux/reducer";

test("reducers", () => {
  let state;
  state = reducers(
    { expressionStack: [], history: [], negativeNumberMode: false },
    { type: "NEGATIVE_NUMBER_MODE_ENABLED" }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":0,"isNegative":true,"isCalculated":false}'],
    history: [],
    negativeNumberMode: true,
  });
  state = reducers(
    {
      expressionStack: ['{"value":0,"isNegative":true,"isCalculated":false}'],
      history: [],
      negativeNumberMode: true,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 5 } }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":"05","isNegative":true,"isCalculated":false}'],
    history: [],
    negativeNumberMode: true,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"05","isNegative":true,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: true,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "PLUS" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"05","isNegative":true,"isCalculated":false}',
      "PLUS",
    ],
    history: [],
    negativeNumberMode: true,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
      ],
      history: [],
      negativeNumberMode: true,
    },
    { type: "NEGATIVE_NUMBER_MODE_DISABLED" }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"05","isNegative":true,"isCalculated":false}',
      "PLUS",
    ],
    history: [],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
      ],
      history: [],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 5 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"05","isNegative":true,"isCalculated":false}',
      "PLUS",
      '{"value":5,"isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
    },
    { type: "CALCULATE_EXPRESSION" }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":0,"isNegative":false,"isCalculated":true}'],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: ['{"value":0,"isNegative":false,"isCalculated":true}'],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "NEGATIVE_NUMBER_MODE_ENABLED" }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":"0","isNegative":true,"isCalculated":false}'],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: true,
  });
  state = reducers(
    {
      expressionStack: ['{"value":"0","isNegative":true,"isCalculated":false}'],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: true,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 5 } }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":"05","isNegative":true,"isCalculated":false}'],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: true,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"05","isNegative":true,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: true,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "PLUS" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"05","isNegative":true,"isCalculated":false}',
      "PLUS",
    ],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: true,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
      ],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: true,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 5 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"05","isNegative":true,"isCalculated":false}',
      "PLUS",
      '{"value":5,"isNegative":true,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: true,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":true,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: true,
    },
    { type: "CALCULATE_EXPRESSION" }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":10,"isNegative":true,"isCalculated":true}'],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":true,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: true,
  });
  state = reducers(
    {
      expressionStack: ['{"value":10,"isNegative":true,"isCalculated":true}'],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":true,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: true,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "MULTIPLY" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":10,"isNegative":true,"isCalculated":true}',
      "MULTIPLY",
    ],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":true,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: true,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":10,"isNegative":true,"isCalculated":true}',
        "MULTIPLY",
      ],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":true,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: true,
    },
    { type: "NEGATIVE_NUMBER_MODE_DISABLED" }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":10,"isNegative":true,"isCalculated":true}',
      "MULTIPLY",
    ],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":true,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":10,"isNegative":true,"isCalculated":true}',
        "MULTIPLY",
      ],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":true,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 2 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":10,"isNegative":true,"isCalculated":true}',
      "MULTIPLY",
      '{"value":2,"isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":true,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":10,"isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":2,"isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":true,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "CALCULATE_EXPRESSION" }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":20,"isNegative":true,"isCalculated":true}'],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":true,"isCalculated":false}',
      ],
      [
        '{"value":10,"isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":2,"isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: ['{"value":20,"isNegative":true,"isCalculated":true}'],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":true,"isCalculated":false}',
        ],
        [
          '{"value":10,"isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":2,"isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "PLUS" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":20,"isNegative":true,"isCalculated":true}',
      "PLUS",
    ],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":true,"isCalculated":false}',
      ],
      [
        '{"value":10,"isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":2,"isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":20,"isNegative":true,"isCalculated":true}',
        "PLUS",
      ],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":true,"isCalculated":false}',
        ],
        [
          '{"value":10,"isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":2,"isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 4 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":20,"isNegative":true,"isCalculated":true}',
      "PLUS",
      '{"value":4,"isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":true,"isCalculated":false}',
      ],
      [
        '{"value":10,"isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":2,"isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":20,"isNegative":true,"isCalculated":true}',
        "PLUS",
        '{"value":4,"isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":true,"isCalculated":false}',
        ],
        [
          '{"value":10,"isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":2,"isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 0 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":20,"isNegative":true,"isCalculated":true}',
      "PLUS",
      '{"value":"40","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":true,"isCalculated":false}',
      ],
      [
        '{"value":10,"isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":2,"isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":20,"isNegative":true,"isCalculated":true}',
        "PLUS",
        '{"value":"40","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":true,"isCalculated":false}',
        ],
        [
          '{"value":10,"isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":2,"isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "CALCULATE_EXPRESSION" }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":20,"isNegative":false,"isCalculated":true}'],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":true,"isCalculated":false}',
      ],
      [
        '{"value":10,"isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":2,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":20,"isNegative":true,"isCalculated":true}',
        "PLUS",
        '{"value":"40","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: ['{"value":20,"isNegative":false,"isCalculated":true}'],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":true,"isCalculated":false}',
        ],
        [
          '{"value":10,"isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":2,"isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":20,"isNegative":true,"isCalculated":true}',
          "PLUS",
          '{"value":"40","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "DIVISION" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":20,"isNegative":false,"isCalculated":true}',
      "DIVISION",
    ],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":true,"isCalculated":false}',
      ],
      [
        '{"value":10,"isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":2,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":20,"isNegative":true,"isCalculated":true}',
        "PLUS",
        '{"value":"40","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":20,"isNegative":false,"isCalculated":true}',
        "DIVISION",
      ],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":true,"isCalculated":false}',
        ],
        [
          '{"value":10,"isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":2,"isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":20,"isNegative":true,"isCalculated":true}',
          "PLUS",
          '{"value":"40","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "NEGATIVE_NUMBER_MODE_ENABLED" }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":20,"isNegative":false,"isCalculated":true}',
      "DIVISION",
    ],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":true,"isCalculated":false}',
      ],
      [
        '{"value":10,"isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":2,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":20,"isNegative":true,"isCalculated":true}',
        "PLUS",
        '{"value":"40","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: true,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":20,"isNegative":false,"isCalculated":true}',
        "DIVISION",
      ],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":true,"isCalculated":false}',
        ],
        [
          '{"value":10,"isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":2,"isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":20,"isNegative":true,"isCalculated":true}',
          "PLUS",
          '{"value":"40","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: true,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 1 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":20,"isNegative":false,"isCalculated":true}',
      "DIVISION",
      '{"value":1,"isNegative":true,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"05","isNegative":true,"isCalculated":false}',
        "PLUS",
        '{"value":5,"isNegative":true,"isCalculated":false}',
      ],
      [
        '{"value":10,"isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":2,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":20,"isNegative":true,"isCalculated":true}',
        "PLUS",
        '{"value":"40","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: true,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":20,"isNegative":false,"isCalculated":true}',
        "DIVISION",
        '{"value":1,"isNegative":true,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"05","isNegative":true,"isCalculated":false}',
          "PLUS",
          '{"value":5,"isNegative":true,"isCalculated":false}',
        ],
        [
          '{"value":10,"isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":2,"isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":20,"isNegative":true,"isCalculated":true}',
          "PLUS",
          '{"value":"40","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: true,
    },
    { type: "CALCULATE_EXPRESSION" }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":20,"isNegative":true,"isCalculated":true}'],
    history: [
      [
        '{"value":10,"isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":2,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":20,"isNegative":true,"isCalculated":true}',
        "PLUS",
        '{"value":"40","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":20,"isNegative":false,"isCalculated":true}',
        "DIVISION",
        '{"value":1,"isNegative":true,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: true,
  });
  state = reducers(
    {
      expressionStack: ['{"value":20,"isNegative":true,"isCalculated":true}'],
      history: [
        [
          '{"value":10,"isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":2,"isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":20,"isNegative":true,"isCalculated":true}',
          "PLUS",
          '{"value":"40","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":20,"isNegative":false,"isCalculated":true}',
          "DIVISION",
          '{"value":1,"isNegative":true,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: true,
    },
    { type: "ALL_CLEAR" }
  );
  expect(state).toEqual({
    expressionStack: [],
    history: [
      [
        '{"value":10,"isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":2,"isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":20,"isNegative":true,"isCalculated":true}',
        "PLUS",
        '{"value":"40","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":20,"isNegative":false,"isCalculated":true}',
        "DIVISION",
        '{"value":1,"isNegative":true,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
});
