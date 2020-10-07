import reducers from "../src/js/redux/reducer";

test("reducers", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({
    expressionStack: [],
    history: [],
    negativeNumberMode: false,
  });
  state = reducers(
    { expressionStack: [], history: [], negativeNumberMode: false },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 5 } }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":"5","isNegative":false,"isCalculated":false}'],
    history: [],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"5","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "DIVISION" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"5","isNegative":false,"isCalculated":false}',
      "DIVISION",
    ],
    history: [],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
      ],
      history: [],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "," } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"5","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"0.","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 6 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"5","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"0.6","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
    },
    { type: "CALCULATE_EXPRESSION" }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"8.3333","isNegative":false,"isCalculated":true}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"8.3333","isNegative":false,"isCalculated":true}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "ALL_CLEAR" }
  );
  expect(state).toEqual({
    expressionStack: [],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 1 } }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":"1","isNegative":false,"isCalculated":false}'],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"1","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 4 } }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":"14","isNegative":false,"isCalculated":false}'],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "MINUS" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 7 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"7","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"7","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 7 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "DIVISION" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 2 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "MINUS" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 3 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 0 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"30","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"30","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 0 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"300","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"300","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 0 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "MINUS" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 1 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"1","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 1 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"11","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"11","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 7 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"117","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"117","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 5 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"1175","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "," } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"1175.","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 5 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"1175.5","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "CALCULATE_EXPRESSION" }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":"4200","isNegative":true,"isCalculated":true}'],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "MULTIPLY" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"4200","isNegative":true,"isCalculated":true}',
      "MULTIPLY",
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "," } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"4200","isNegative":true,"isCalculated":true}',
      "MULTIPLY",
      '{"value":"0.","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"0.","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 1 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"4200","isNegative":true,"isCalculated":true}',
      "MULTIPLY",
      '{"value":"0.1","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"0.1","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "CALCULATE_EXPRESSION" }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":"420","isNegative":true,"isCalculated":true}'],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"0.1","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"420","isNegative":true,"isCalculated":true}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"4200","isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":"0.1","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "PLUS" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"420","isNegative":true,"isCalculated":true}',
      "PLUS",
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"0.1","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"420","isNegative":true,"isCalculated":true}',
        "PLUS",
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"4200","isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":"0.1","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 4 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"420","isNegative":true,"isCalculated":true}',
      "PLUS",
      '{"value":"4","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"0.1","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"420","isNegative":true,"isCalculated":true}',
        "PLUS",
        '{"value":"4","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"4200","isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":"0.1","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 6 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"420","isNegative":true,"isCalculated":true}',
      "PLUS",
      '{"value":"46","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"0.1","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"420","isNegative":true,"isCalculated":true}',
        "PLUS",
        '{"value":"46","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"4200","isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":"0.1","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 2 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"420","isNegative":true,"isCalculated":true}',
      "PLUS",
      '{"value":"462","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"5","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"0.6","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"0.1","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"420","isNegative":true,"isCalculated":true}',
        "PLUS",
        '{"value":"462","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"5","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"0.6","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"4200","isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":"0.1","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
    },
    { type: "CALCULATE_EXPRESSION" }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":"42","isNegative":false,"isCalculated":true}'],
    history: [
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"0.1","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"420","isNegative":true,"isCalculated":true}',
        "PLUS",
        '{"value":"462","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
  });
});
