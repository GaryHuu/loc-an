import { Checkbox } from 'antd'

const items = [
  {
    name: 'Áo đồng phục FTECH',
    id: 1,
  },
  {
    name: 'Áo dresscode',
    id: 2,
  },
  {
    name: 'Quần áo ấm',
    id: 3,
  },
  {
    name: 'Đồ dùng cá nhân',
    id: 4,
  },
  {
    name: 'Giày thể thao',
    id: 5,
  },
  {
    name: 'Điện thoại',
    id: 6,
  },
  {
    name: 'Các loại dây sạc ',
    id: 7,
  },
  {
    name: 'Kem chống nắng',
    id: 8,
  },
  {
    name: 'Giấy tờ tùy thân',
    id: 9,
  },
  {
    name: 'Money money',
    id: 10,
  },
  {
    name: 'Các loại thuốc cá nhân',
    id: 11,
  },
  {
    name: 'Snack ăn thêm',
    id: 12,
  },
  {
    name: 'Đồ skincare',
    id: 13,
  },
  {
    name: 'Mũ che nắng',
    id: 14,
  },
  {
    name: 'Máy ảnh',
    id: 15,
  },
  {
    name: 'Các đồ dùng cá nhân khác',
    id: 16,
  },
]

export default function SessionCheckList() {
  return (
    <div className='custom-shape-divider-top-1685952780 h-100vh bg-[#DCECFB]'>
      <div className='w-full'>
        <div className='container flex items-center justify-center flex-col h-[100vh]'>
          <p className='lg:text-6xl text-primary font-extrabold mb-1 animate__wobble text-4xl mb-6'>
            CHECKLIST
          </p>

          <p className='lg:text-2xl font-thin text-gray-600 sm:text-xl my-2'>
            COMPANY TRIP
          </p>
          <div className='flex justify-center lg:px-32 my-2'>
            <p className='text-center'>
              {' '}
              Để không phải lo lắng vì quên đồ khi đi du lịch, các bạn FTECHers
              nên chuẩn bị ngay một check-list các đồ dùng cần thiết cho cả
              chuyến đi. Các bạn tham khảo hoặc "screenshot" checklist tại đây
              nhéeee
            </p>
          </div>
          <div className='flex w-full flex-wrap mt-4'>
            {items.map((e) => {
              return (
                <div
                  key={e.id}
                  className='item-check lg:w-1/6 sm:w-1/3 w-1/2 flex mt-2'
                >
                  <Checkbox className='text-start'>{e.name}</Checkbox>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
