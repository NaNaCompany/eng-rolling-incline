export const tool={
  "id": "E122",
  "slug": "eng-rolling-incline",
  "title": "경사면 순수 구름 가속도 계산기",
  "title_en": "Rolling acceleration on an incline calculator",
  "category": "역학·재료",
  "category_en": "Mechanics and materials",
  "fields": [
    {
      "key": "mass",
      "label": "물체 질량 m",
      "label_en": "Body mass m",
      "dimension": "mass",
      "example": 2,
      "constraint": "positive",
      "display_unit": "kg",
      "display_value": "2"
    },
    {
      "key": "radius",
      "label": "구름 반지름 r",
      "label_en": "Rolling radius r",
      "dimension": "length",
      "example": 0.2,
      "constraint": "positive",
      "display_unit": "m",
      "display_value": "0.20000000000000001"
    },
    {
      "key": "inertia",
      "label": "질량중심 축 관성모멘트 I",
      "label_en": "Moment of inertia about the center I",
      "dimension": "massInertia",
      "example": 0.04,
      "constraint": "nonnegative",
      "display_unit": "kgm2",
      "display_value": "0.040000000000000001"
    },
    {
      "key": "angle",
      "label": "경사각 θ",
      "label_en": "Incline angle θ",
      "dimension": "angle",
      "example": 0.5235987755982988,
      "constraint": "quarterTurn",
      "display_unit": "rad",
      "display_value": "0.52359877559829882"
    },
    {
      "key": "gravity",
      "label": "중력가속도 g",
      "label_en": "Gravitational acceleration g",
      "dimension": "acceleration",
      "example": 9.81,
      "constraint": "positive",
      "display_unit": "ms2",
      "display_value": "9.8100000000000005"
    }
  ],
  "result_label": "경사면 아래 방향 가속도 a",
  "result_label_en": "Down-slope acceleration a",
  "result_dimension": "acceleration",
  "formula": "a = g sin θ / [1 + I/(m r²)]",
  "purpose": "회전 관성까지 반영하여 경사면을 미끄러지지 않고 구르는 물체의 가속도를 계산합니다.",
  "purpose_en": "Compute down-slope acceleration while accounting for both translation and rotation.",
  "assumptions": "강체가 일정한 경사면에서 순수 구름 운동을 합니다. 접촉을 유지하는 0 ≤ θ < 90° 범위이며, 미끄럼 방지에 충분한 정지마찰이 있다고 가정합니다. I는 질량중심을 지나는 구름 축에 대한 값입니다. 공기저항·구름저항·미끄럼은 제외합니다.",
  "assumptions_en": "Required: a rigid body, a uniform slope, 0 ≤ θ < 90°, and enough static friction for rolling without slip. I is about the rolling axis through the center of mass. Excluded: air drag, rolling resistance, and slipping.",
  "sources": [
    {
      "label": "OpenStax — rolling motion",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/11-1-rolling-motion"
    }
  ],
  "condition": "미끄럼 없는 구름 운동과 충분한 정지마찰 조건을 확인했습니다.",
  "condition_en": "I confirm rolling without slip and sufficient static friction.",
  "site": "https://nanalab.kr/eng-rolling-incline/",
  "repository": "https://github.com/NaNaCompany/eng-rolling-incline",
  "groups": [],
  "output_unit": "ms2"
};
