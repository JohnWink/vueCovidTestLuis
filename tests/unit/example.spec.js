import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Spain";
    const wrapper = shallowMount(HelloWorld, {
      propsData: {country: msg }
    });
    expect(wrapper.props().country).toBe(msg);
  });
});
