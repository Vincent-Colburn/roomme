import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  matches: [],
  activeMatch: {},
  profiles: [],
  myProfile: { name: 'vincent', age: 23, gender: 'Male', Location: '83703', aboutMe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit porro impedit placeat libero a sapiente distinctio dignissimos totam eaque rerum? Explicabo, labore quasi quam fuga quas voluptatum quia repellendus tempore eius similique perferendis dolor dicta dolorem quo corrupti. Reiciendis ipsa voluptatum modi quia dolores corrupti natus illum earum nulla! Cupiditate aspernatur tenetur qui quaerat eveniet laudantium maiores error odio. Eius hic tempora cupiditate laboriosam asperiores numquam blanditiis, unde, aut aliquam molestiae vitae consequatur minus nam! Nobis ab minus recusandae ex dolor aut et id alias doloremque reprehenderit, maxime sequi corrupti fugiat aliquam nemo sed qui nulla nam unde illum! Cumque.', imgUrl: 'https://thispersondoesnotexist.com/image', lookingFor: 'roommate', priceRange: '300-600', interests: 'Lorem ipsum dolor sit amet, consectetur.', lifestyleOptions: 'smoker, toker, midnight joker', anticipatedMoveInDate: '12/1/2040' },
  activeProfile: {}
})
