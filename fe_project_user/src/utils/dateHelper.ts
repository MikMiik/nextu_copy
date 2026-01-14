/**
 * Format ngày thành chuỗi yyyy-MM-dd
 * Chỉ truyền ngày tháng năm, không có giờ phút giây
 * Tránh việc Date.toISOString() làm lùi ngày do chuyển đổi timezone
 * 
 * @param date - Date object cần format
 * @returns String định dạng yyyy-MM-dd
 */
export const formatDateWithoutTimezone = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Tính ngày kết thúc dựa trên ngày bắt đầu và duration
 * Logic: Ngày đầu được tính là ngày thứ 1, nên cộng thêm (duration - 1) ngày
 * Ví dụ: 1 tháng = 30 ngày, từ 29/8 đến 27/9 (cộng thêm 29 ngày)
 * 
 * @param startDate - Ngày bắt đầu
 * @param durationUnit - Đơn vị thời gian (Day, Month, Year)
 * @param durationValue - Giá trị thời gian
 * @returns Ngày kết thúc
 */
export const calculateEndDate = (startDate: Date, durationUnit: string, durationValue: number): Date => {
  const endDate = new Date(startDate);
  const unit = String(durationUnit);
  const value = Number(durationValue) || 0;
  
  let daysToAdd = 0;
  if (unit === 'Month') {
    daysToAdd = (value * 30) - 1; // Cộng thêm 29 ngày cho 1 tháng
  } else if (unit === 'Year') {
    daysToAdd = (value * 365) - 1; // Cộng thêm 364 ngày cho 1 năm
  } else if (unit === 'Day') {
    daysToAdd = value - 1; // Cộng thêm (value - 1) ngày
  }
  
  if (daysToAdd > 0) {
    endDate.setDate(endDate.getDate() + daysToAdd);
  }
  
  return endDate;
};


