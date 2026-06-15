import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);


// 宠物类型映射（中文 → 数据库值）
const PET_TYPE_MAP = {
  '小型犬': 'dog',
  '中型犬': 'dog',
  '大型犬': 'dog',
  '猫咪': 'cat',
  '其他': 'other',
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, petName, petType, service, date, time, message } = body;

    // 必填字段校验
    if (!name || !phone) {
      return Response.json(
        { error: '请填写姓名和手机号' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('bookings')
      .insert({
        customer_name: name,
        phone: phone,
        pet_name: petName || null,
        pet_type: PET_TYPE_MAP[petType] || 'other',
        services: service ? [service] : [],
        preferred_date: date || null,
        preferred_time: time || null,
        notes: message || null,
      })
      .select('id')
      .single();

    if (error) throw error;

    return Response.json({
      success: true,
      id: data.id,
      message: '预约提交成功！我们会在 30 分钟内与您联系确认。',
    });
  } catch (error) {
    console.error('Booking insert error:', error.message || error);
    return Response.json(
      { error: '提交失败，请稍后重试或直接电话联系我们。' },
      { status: 500 }
    );
  }
}
