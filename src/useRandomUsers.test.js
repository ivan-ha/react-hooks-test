import axios from "axios";
import { renderHook, act } from "react-hooks-testing-library";
import { useRandomUsers } from "./useRandomUsers";
import { mockResponse } from "./mockResponse";

jest.mock("axios");

describe("useRandomUsers", () => {
  it("call API and return results", async () => {
    axios.mockImplementation(() => Promise.resolve({ data: mockResponse }));
    const { result, waitForNextUpdate } = renderHook(() => useRandomUsers());

    expect(result.current).toStrictEqual([]);

    await act(() => waitForNextUpdate());
    expect(result.current).toStrictEqual(mockResponse.results);
    expect(axios).toHaveBeenCalledWith(
      "https://randomuser.me/api/?results=10&inc=name,login&nat=us"
    );
  });
});
