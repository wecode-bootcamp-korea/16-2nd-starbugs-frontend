import React from "react";

export default function ProductNutritionsInfo({ nutritions }) {
  const NUTRITIONS1_OBJ = [
    {
      title: "1회 제공량 (kcal)",
      content: nutritions.kcal,
    },
    {
      title: "포화지방(g)",
      content: nutritions.saturation,
    },
    {
      title: "단백질(g)",
      content: nutritions.protein,
    },
  ];

  const NUTRITIONS2_OBJ = [
    {
      title: "나트륨 (mg)",
      content: nutritions.sodium,
    },
    {
      title: "당류 (g)",
      content: nutritions.sugar,
    },
    {
      title: "카페인 (mg)",
      content: nutritions.caffeine,
    },
  ];
  return (
    <>
      <ul>
        {NUTRITIONS1_OBJ.map((nutrition, idx) => {
          return (
            <li key={idx}>
              <dt>{nutrition.title}</dt>
              <dd>{nutrition.content}</dd>
            </li>
          );
        })}
      </ul>
      <ul>
        {NUTRITIONS2_OBJ.map((nutrition, idx) => {
          return (
            <li key={idx}>
              <dt>{nutrition.title}</dt>
              <dd>{nutrition.content}</dd>
            </li>
          );
        })}
      </ul>
    </>
  );
}
